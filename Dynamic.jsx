import React, { useState } from "react";
import "./DynamicTabs.css"; // Optional for styling

const DynamicTabs = () => {
  const [tabs, setTabs] = useState([{ id: 1, title: "Tab 1", content: "This is Tab 1" }]);
  const [activeTab, setActiveTab] = useState(1);
  const [tabCount, setTabCount] = useState(2); // Track tab numbering

  // Add New Tab
  const addTab = () => {
    const newTab = {
      id: tabCount,
      title: `Tab ${tabCount}`,
      content: `This is Tab ${tabCount}`,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
    setTabCount(tabCount + 1);
  };

  // Remove Tab
  const removeTab = (id) => {
    const filteredTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(filteredTabs);
    if (id === activeTab && filteredTabs.length > 0) {
      setActiveTab(filteredTabs[0].id); // Set first tab as active if removed
    }
  };

  return (
    <div className="tab-container">
      <div className="tab-header">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            <button className="close-btn" onClick={(e) => { e.stopPropagation(); removeTab(tab.id); }}>✖</button>
          </div>
        ))}
        <button className="add-btn" onClick={addTab}>+ Add Tab</button>
      </div>

      <div className="tab-content">
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
};

export default DynamicTabs;


.tab-container {
  width: 100%;
  margin: 20px;
  font-family: Arial, sans-serif;
}

.tab-header {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
}

.tab-item {
  padding: 10px 15px;
  margin-right: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-radius: 5px 5px 0 0;
  position: relative;
  display: flex;
  align-items: center;
}

.tab-item.active {
  background: #007bff;
  color: white;
}

.close-btn {
  margin-left: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: red;
}

.add-btn {
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background: #28a745;
  color: white;
  border-radius: 3px;
  margin-left: 10px;
}

.tab-content {
  padding: 15px;
  border: 1px solid #ccc;
  margin-top: -1px;
  background: #fff;
}


import React from "react";
import DynamicTabs from "./DynamicTabs";

function App() {
  return (
    <div className="App">
      <h2>Dynamic Tabs Example</h2>
      <DynamicTabs />
    </div>
  );
}

export default App;




import React, { useState, useEffect, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DynamicTabs.css";

const DynamicTabs = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Load tabs from localStorage
  useEffect(() => {
    const savedTabs = JSON.parse(localStorage.getItem("tabs")) || [
      { id: 1, title: "Tab 1", content: "Welcome to Tab 1", type: "text" },
    ];
    setTabs(savedTabs);
    setActiveTab(savedTabs[0]?.id || null);
  }, []);

  // Save tabs to localStorage
  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  // Add a new tab
  const addTab = () => {
    const newTab = {
      id: Date.now(),
      title: `New Tab`,
      content: "Enter content here...",
      type: "text",
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  // Remove a tab
  const removeTab = (id) => {
    const filteredTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(filteredTabs);
    setActiveTab(filteredTabs.length ? filteredTabs[0].id : null);
  };

  // Rename a tab
  const renameTab = (id, newTitle) => {
    setTabs(tabs.map((tab) => (tab.id === id ? { ...tab, title: newTitle } : tab)));
  };

  // Change tab content type
  const changeTabType = (id, newType) => {
    setTabs(tabs.map((tab) => (tab.id === id ? { ...tab, type: newType } : tab)));
  };

  // Handle drag and drop
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedTabs = [...tabs];
    const [movedTab] = reorderedTabs.splice(result.source.index, 1);
    reorderedTabs.splice(result.destination.index, 0, movedTab);
    setTabs(reorderedTabs);
  };

  // Keyboard Shortcuts
  const handleKeyDown = useCallback((event) => {
    if (event.ctrlKey && event.key === "t") {
      event.preventDefault();
      addTab();
    }
    if (event.ctrlKey && event.key === "w") {
      event.preventDefault();
      if (activeTab) removeTab(activeTab);
    }
  }, [activeTab, tabs]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={`tab-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="tab-header">
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tabs" direction="horizontal">
            {(provided) => (
              <div className="tab-list" ref={provided.innerRef} {...provided.droppableProps}>
                {tabs.map((tab, index) => (
                  <Draggable key={tab.id} draggableId={String(tab.id)} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <input
                          type="text"
                          value={tab.title}
                          onChange={(e) => renameTab(tab.id, e.target.value)}
                          className="tab-title-input"
                        />
                        <button className="close-btn" onClick={(e) => { e.stopPropagation(); removeTab(tab.id); }}>✖</button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <button className="add-btn" onClick={addTab}>+ Add Tab</button>
      </div>

      <div className="tab-content">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id}>
              <select onChange={(e) => changeTabType(tab.id, e.target.value)} value={tab.type}>
                <option value="text">Text</option>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>

              {tab.type === "text" && <textarea value={tab.content} onChange={(e) => renameTab(tab.id, e.target.value)} />}
              {tab.type === "image" && <input type="text" placeholder="Enter Image URL" onChange={(e) => renameTab(tab.id, e.target.value)} />}
              {tab.type === "video" && <input type="text" placeholder="Enter Video URL" onChange={(e) => renameTab(tab.id, e.target.value)} />}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default DynamicTabs;


.tab-container {
  width: 90%;
  margin: auto;
  font-family: Arial, sans-serif;
}

.tab-header {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
}

.tab-list {
  display: flex;
  overflow-x: auto;
}

.tab-item {
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #f5f5f5;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
}

.tab-item.active {
  background: #007bff;
  color: white;
}

.tab-title-input {
  width: 80px;
  border: none;
  background: transparent;
  color: inherit;
  font-weight: bold;
}

.close-btn {
  border: none;
  background: none;
  cursor: pointer;
  color: red;
  margin-left: 5px;
}

.add-btn {
  padding: 5px 10px;
  cursor: pointer;
  background: #28a745;
  color: white;
  border-radius: 3px;
  margin-left: 10px;
}

.theme-btn {
  margin-right: 10px;
}

.dark-mode {
  background: #222;
  color: white;
}


import React from "react";
import DynamicTabs from "./DynamicTabs";

function App() {
  return (
    <div className="App">
      <h2>Advanced Dynamic Tabs</h2>
      <DynamicTabs />
    </div>
  );
}

export default App;




