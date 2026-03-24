#!/usr/bin/env python3
"""
Exemplo de script determinístico encapsulando lógica de negócio.
Seguindo o doeframework: toda a lógica complexa (checkout, APIs, integrações)
deve ser feita aqui na camada de execução (`execution/`).

Este script pode ser invocado via linha de comando, cronjob, ou 
pelo backend Python (como FastAPI) para processar novos pedidos.
"""

import os
import sys

def process_new_order(order_id: str):
    print(f"[{order_id}] Validando estoque...")
    # Lógica de validação...
    
    print(f"[{order_id}] Processando pagamento...")
    # Chamada para gateway de pagamento...
    
    print(f"[{order_id}] Atualizando status do banco de dados...")
    # Update DB...
    
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python 01_process_order.py <order_id>")
        sys.exit(1)
        
    order_id = sys.argv[1]
    print(f"Iniciando processamento do pedido {order_id}...")
    success = process_new_order(order_id)
    
    if success:
        print(f"Pedido {order_id} processado com sucesso!")
        sys.exit(0)
    else:
        print(f"Falha ao processar o pedido {order_id}.")
        sys.exit(1)
