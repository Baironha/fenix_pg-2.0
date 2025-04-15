FROM python:3.10

WORKDIR /app

COPY ScriptModeloML.py .
COPY global_inflation_data.csv .

RUN pip install pandas numpy scikit-learn joblib

CMD ["python", "ScriptModeloML.py"]
