l = [7, 1, 2, 3, 4, 5, 8]
s = 0
for i in range(len(l)):
    for j in range(i + 1, len(l)):
        if l[i] > l[j]:
            s = l[i] - l[j]
            print("Values of", l[i], "and", l[j], "is", s)
        elif l[i] < l[j]:  # Correct 'elif' condition for alternative logic
            s = l[j] - l[i]
            print("Values of", l[i], "and", l[j], "is", s)
