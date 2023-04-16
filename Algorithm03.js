// Retorna um caractere hexadecimal aleatório em maiúsculas.
function randomHexChar() {
    const num = Math.floor(Math.random() * 16);
    return num.toString(16).toUpperCase();
  }
  
  // Recebe um comprimento e retorna uma sequência hexadecimal aleatória com o comprimento especificado.
  function randomHexSequence(length) {
    let sequence = '';
    for (let i = 0; i < length; i++) {
      sequence += randomHexChar();
    }
    return sequence;
  }
  
  // Retorna um ID hexadecimal aleatório formatado como uma sequência de quatro blocos com quatro caracteres cada.
  function generateId() {
    const id = `${randomHexSequence(4)}-${randomHexSequence(4)}-${randomHexSequence(4)}-${randomHexSequence(4)}`;
    return id;
  }
  
  // Chama a função "generateId" para gerar um ID aleatório e imprime-o no console.
  const id = generateId();
  console.log(id);
  