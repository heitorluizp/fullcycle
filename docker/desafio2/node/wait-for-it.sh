#!/bin/bash

# Espera até que o serviço de banco de dados esteja disponível na porta 3306 antes de continuar

# Verifica se a porta 3306 está acessível
while ! nc -z db 3306; do
  echo "Aguardando que o serviço de banco de dados esteja disponível na porta 3306..."
  sleep 1
done

echo "O serviço de banco de dados está disponível na porta 3306!"