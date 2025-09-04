---------------------- Criação das tabelas
CREATE TABLE IF NOT EXISTS endereços(
	id SERIAL PRIMARY KEY,
	rua VARCHAR(100) NOT NULL,
	número VARCHAR(100) NOT NULL,
	bairro VARCHAR(50) NOT NULL,
	cidade VARCHAR(50) NOT NULL,
	estado VARCHAR(50) NOT NULL,
	UF VARCHAR(2) NOT NULL,
	CEP VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS vendedores(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	cnpj VARCHAR(100) NOT NULL,
	endereço_id INT NOT NULL REFERENCES endereços(id)
);

CREATE TABLE IF NOT EXISTS clientes(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(70) UNIQUE,
	telefone VARCHAR(20) NOT NULL,
	endereço_id INT NOT NULL REFERENCES endereços(id)
);

CREATE TABLE IF NOT EXISTS produtos(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(200) NOT NULL,
	preço NUMERIC(8,2) UNIQUE,
	estoque INT NOT NULL,
	vendedor_id INT NOT NULL REFERENCES vendedores(id)
);

CREATE TABLE IF NOT EXISTS entregadores(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	endereço_id INT NOT NULL REFERENCES endereços(id)
);

CREATE TABLE IF NOT EXISTS compras(
	id SERIAL PRIMARY KEY,
	client_id INT NOT NULL REFERENCES clientes(id),
	product_id INT NOT NULL REFERENCES produtos(id),
	entregador_id INT NOT NULL REFERENCES entregadores(id),
	quantidade INT NOT NULL,
	data_venda TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS favoritos(
	id SERIAL PRIMARY KEY,
	client_id INT NOT NULL REFERENCES clientes(id),
	product_id INT NOT NULL REFERENCES produtos(id),
	nome_lista VARCHAR(50) NOT NULL DEFAULT 'Comprar mais tarde'
);

---------------------- Inserção de alguns valores para os vendedores
INSERT INTO endereços (rua, número, bairro, cidade, estado, UF, CEP) VALUES 
('Rua das Flores', '123', 'Centro', 'Fortaleza', 'Ceará', 'CE', '60000-000'),
('Avenida Brasil', '456', 'Copacabana', 'Rio de Janeiro', 'Rio de Janeiro', 'RJ', '22000-000'),
('Rua XV de Novembro', '789', 'Centro', 'Curitiba', 'Paraná', 'PR', '80000-000'),
('Avenida Paulista', '1000', 'Bela Vista', 'São Paulo', 'São Paulo', 'SP', '01310-000'),
('Rua Sete de Setembro', '55', 'Centro Histórico', 'Porto Alegre', 'Rio Grande do Sul', 'RS', '90010-000');

INSERT INTO vendedores (nome, cnpj, endereço_id) VALUES
('João Silva', '12.345.678/0001-90', '1'),
('Maria Silva', '23.456.789/0001-01', '1'),
('Ana Souza', '45.678.901/0001-23', '2'),
('Pedro Oliveira', '56.789.012/0001-34', '3'),
('Fernanda Lima', '67.890.123/0001-45', '4'),
('Ricardo Gomes', '78.901.234/0001-56', '5');

---------------------- Inserção de alguns valores para os clientes
INSERT INTO endereços (rua, número, bairro, cidade, estado, UF, CEP) VALUES 
('Rua das Palmeiras', 250, 'Aldeota', 'Fortaleza', 'Ceará', 'CE', '60150-000'),
('Avenida Atlântica', 900, 'Leme', 'Rio de Janeiro', 'Rio de Janeiro', 'RJ', '22010-000'),
('Rua Padre Chagas', 120, 'Moinhos de Vento', 'Porto Alegre', 'Rio Grande do Sul', 'RS', '90570-080');

INSERT INTO clientes (nome, email, telefone, endereço_id) VALUES
('Lucas Martins', 'lucas.martins@email.com', '(85) 98888-1111', '6'),
('Juliana Martins', 'juliana.martins@email.com', '(85) 97777-2222', '6'),
('Roberto Almeida', 'roberto.almeida@email.com', '(21) 96666-3333', '7'),
('Camila Souza', 'camila.souza@email.com', '(21) 95555-4444', '8');

---------------------- Inserção de alguns valores para os entregadores
INSERT INTO endereços (rua, número, bairro, cidade, estado, UF, CEP) VALUES 
('Rua dos Girassóis', '321', 'Meireles', 'Fortaleza', 'Ceará', 'CE', '60160-000'),
('Avenida das Nações', '1500', 'Barra da Tijuca', 'Rio de Janeiro', 'Rio de Janeiro', 'RJ', '22775-000'),
('Rua Leopoldo Couto de Magalhães', '850', 'Itaim Bibi', 'São Paulo', 'São Paulo', 'SP', '04542-000');

INSERT INTO entregadores (nome, endereço_id) VALUES
('Rafael Costa', 9),
('Mariana Silva', 10),
('Thiago Pereira', 11);

---------------------- Inserção de alguns valores para os produtos
INSERT INTO produtos (nome, preço, estoque, vendedor_id) VALUES
('Smartphone Samsung Galaxy A15', '1249.90', '30', '1'),
('Fone de Ouvido Bluetooth JBL', '199.90', '100', '2'),
('Notebook Dell Inspiron 15', '3499.00', '20', '3'),
('Cafeteira Elétrica Philips Walita', '289.00', '40', '4'),
('Mouse Gamer Logitech G203', '129.90', '75', '6');

---------------------- Inserção de alguns valores para os favoritos
INSERT INTO favoritos (client_id, product_id) VALUES
(1, 1),
(1, 3),
(2, 4),
(2, 1);

INSERT INTO favoritos (client_id, product_id, nome_lista) VALUES
(3, 2, 'Presentes'),
(4, 3, 'Esperar desconto');

---------------------- Inserção de alguns valores para os compras
INSERT INTO compras (client_id, product_id, entregador_id, quantidade) VALUES
(1, 1, 2, 10),
(2, 2, 1, 5),
(3, 3, 3, 1),
(4, 5, 1, 1);

-- Para deletar todas as tabelas
-- DROP TABLE endereços, vendedores, clientes, produtos, entregadores, compras, favoritos CASCADE
