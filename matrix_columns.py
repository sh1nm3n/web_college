# Практическая работа №4. Вариант 1.
# Ввод вещественной матрицы размерности n * m построчно
# и вывод её элементов по столбцам.


def read_size():
    """Ввод размеров матрицы n (строки) и m (столбцы) с проверкой."""
    while True:
        try:
            n = int(input("Введите количество строк n: "))
            m = int(input("Введите количество столбцов m: "))
            if n > 0 and m > 0:
                return n, m
            print("Ошибка: n и m должны быть больше нуля.")
        except ValueError:
            print("Ошибка: n и m должны быть целыми числами.")


def read_row(number, m):
    """Ввод одной строки матрицы: ровно m вещественных чисел через пробел."""
    while True:
        text = input(f"Строка {number} (элементов: {m}, через пробел): ")
        try:
            row = [float(x) for x in text.replace(",", ".").split()]
        except ValueError:
            print("Ошибка: вводите только числа.")
            continue
        if len(row) == m:
            return row
        print(f"Ошибка: количество элементов в строке должно быть равно {m}.")


def read_matrix(n, m):
    """Построчный ввод матрицы размерности n * m."""
    matrix = []
    for i in range(n):
        matrix.append(read_row(i + 1, m))
    return matrix


def get_column(matrix, j):
    """Возвращает j-й столбец матрицы (нумерация с нуля)."""
    return [row[j] for row in matrix]


def print_matrix(matrix):
    """Вывод матрицы построчно (для проверки ввода)."""
    for row in matrix:
        print(" ".join(str(x) for x in row))


def print_by_columns(matrix, m):
    """Вывод матрицы по столбцам."""
    for j in range(m):
        column = get_column(matrix, j)
        print(f"Столбец {j + 1}: " + " ".join(str(x) for x in column))


def main():
    n, m = read_size()
    matrix = read_matrix(n, m)
    print("\nВведённая матрица (по строкам):")
    print_matrix(matrix)
    print("\nМатрица, выведенная по столбцам:")
    print_by_columns(matrix, m)


if __name__ == "__main__":
    main()
