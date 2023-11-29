import math

n = 9

while True:
    # Expression to check
    expression = math.sqrt(n * (n + 1) / 2)
    
    # Check if expression is an integer
    if expression.is_integer():
        break  # Exit loop if expression is an integer
    
    n += 1  # Increment n

# Print the result
print(f"The value of n is {n}, and the expression evaluates to {expression}")



