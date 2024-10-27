def odd_number_pyramid(n):
    for i in range(1, n + 1):
        current_number = 1
        for j in range(i):
            print(current_number, end=" ")
            current_number += 2
        print()  

rows=int(input("enter number of rows: "))
odd_number_pyramid(rows)
