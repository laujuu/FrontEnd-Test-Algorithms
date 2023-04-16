# Cria uma lista chamada "array" contendo vários tipos de dados.
array = ["a", 10, "b", "hola", 122, 15]

# Cria uma lista vazia para armazenar letras
letters = []
# Cria uma lista vazia para armazenar numeros
numbers = []

# Define a variável "highest_number" como zero.
highest_number = 0

# Faz um loop através de cada elemento na lista "array".
for element in array:
    
    # Verifica se o tipo do elemento é uma string.
    if type(element) == str:
        
        # Se for uma string, adiciona o elemento à lista "letters".
        letters.append(element)
        
    # Verifica se o tipo do elemento é um inteiro.
    elif type(element) == int:
        
        # Se for um inteiro, adiciona o elemento à lista "numbers".
        numbers.append(element)
        
        # Verifica se o elemento é o maior número encontrado até agora.
        if element > highest_number:
            
            # Se for o maior número encontrado até agora, atualiza o valor da variável "highest_number".
            highest_number = element

print("Letters:", letters)
print("Numbers:", numbers)
print("Highest number:", highest_number)
