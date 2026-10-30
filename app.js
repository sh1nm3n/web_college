const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

let bouquets = [
    {
        id: 1,
        category: "Тюльпаны",
        name: "Весенняя радость",
        description: "Свежие тюльпаны с зеленью — дыхание весны",
        price: 2400
    },
    {
        id: 2,
        category: "Пионы",
        name: "Пионовый рай",
        description: "Пышные пионы с эвкалиптом и гипсофилой",
        price: 5600
    },
    {
        id: 3,
        category: "Розы",
        name: "Красная классика",
        description: "Алые розы с лёгкой гипсофилой",
        price: 2400
    },
    {
        id: 4,
        category: "Тюльпаны",
        name: "Тюльпановое утро",
        description: "Тюльпаны с гипсофилой и эвкалиптом",
        price: 2400
    }
]

app.get("/bouquets", (req, res) => {
    res.status(200).json(bouquets);
});

app.get("/bouquets/:id", (req, res) => {
    const bouquet = bouquets.find(
        b => b.id === Number(req.params.id)
    );
    if (!bouquet) {
        return res.status(404).json({
            message: "Товар не найден"
        });
    }
    res.status(200).json(bouquet);
});

app.post("/bouquets", (req, res) => {
    const { category, name, description, price } = req.body;
    if (!category || !name || !description || !price) {
        return res.status(400).json({
            message: "Необходимо заполнить все поля"
        });
    }

    const newBouquet = {
        id: Date.now(),
        category,
        name,
        description,
        price
    };

    bouquets.push(newBouquet);

    res.status(201).json(newBouquet);
});

app.put("/bouquets/:id", (req, res) => {
    const bouquet = bouquets.find(
        b => b.id === Number(req.params.id)
    );

    if (!bouquet) {
        return res.status(404).json({
            message: "Товар не найден"
        });
    }

    const { category, description, name, price } = req.body;

    bouquet.category = category;
    bouquet.description = description;
    bouquet.name = name;
    bouquet.price = price;


    res.status(200).json(bouquet);
});

app.delete("/bouquets/:id", (req, res) => {
    const id = Number(req.params.id);

    const bouquet = bouquets.find(
        b => b.id === id
    );

    if (!bouquet) {
        return res.status(404).json({
            message: "Товар не найден"
        });
    }

    bouquets = bouquets.filter(
        b => b.id !== id
    );

    res.status(200).json({
        message: "Товар успешно удалён"
    });
});


app.listen(3000, () => {
    console.log("Сервер запущен")
})

