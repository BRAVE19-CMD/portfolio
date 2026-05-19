import pandas as pd

# Read the Gantt chart file
gantt_file = "user_input_files/DIAGRAMME DE GANT.xlsx"
gantt_df = pd.read_excel(gantt_file, sheet_name=None)

print("=== DIAGRAMME DE GANT ===")
for sheet_name, df in gantt_df.items():
    print(f"\n--- Feuille: {sheet_name} ---")
    print(df.to_string())
    print(f"\nColonnes: {list(df.columns)}")

print("\n\n")

# Read the sales file
sales_file = "user_input_files/ventes_3ans_100000.xlsx"
sales_df = pd.read_excel(sales_file, sheet_name=None)

print("=== VENTES 3 ANS ===")
for sheet_name, df in sales_df.items():
    print(f"\n--- Feuille: {sheet_name} ---")
    print(df.head(20).to_string())
    print(f"\nColonnes: {list(df.columns)}")
    print(f"Nombre de lignes: {len(df)}")