const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Proszę wprowadź nazwę produktu"],
		trim: true,
		maxLength: [100, "Proszę wprowadź max 100 znaków"],
	},
	price: {
		type: Number,
		required: [true, "Proszę wprowadź nazwę produktu"],
		maxLength: [5, "Proszę wprowadź max 5 cyfr"],
		default: 0.0,
	},
	description: {
		type: String,
		required: [true, "Proszę wprowadź opis produktu"],
	},
	ratings: {
		type: Number,
		default: 0,
	},
	images: [
		{
			img: {
				type: String,
				default:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmq1v7TsJ0PaKgcvc5kMmahNYp9tKbFtvdVg&usqp=CAU",
			},
			thumbnail: {
				type: String,
				default:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmq1v7TsJ0PaKgcvc5kMmahNYp9tKbFtvdVg&usqp=CAU",
			},
		},
	],

	category: {
		type: String,
		required: [true, "Proszę wprowadź kategorię dla tego produktu"],
		enum: {
			values: [
				"Elektronika",
				"Moda",
				"Dom i Ogród",
				"Dziecko",
				"Supermarket",
				"Uroda",
				"Zdrowie",
				"Kultura i rozrywka",
				"Sport i turystyka",
				"Motoryzacja",
				"Outdoor",
			],
			message: "Proszę wybierz poprawną kategorię dla produktu.",
		},
	},
	seller: {
		type: String,
		required: [true, "Proszę wybierz sprzedawcę."],
	},
	stock: {
		type: Number,
		required: [true, "Proszę wybierz stan magazynowy"],
		maxLength: [
			5,
			"Liczba produktu nie może przekroczyć pięciocyfrowej liczby.",
		],
		default: 0,
	},
	numOfReviews: {
		type: Number,
		default: 0,
	},
	reviews: [
		{
			user: {
				type: mongoose.Schema.ObjectId,
				ref: "User",
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			rating: {
				type: Number,
				required: true,
			},
			comment: {
				type: String,
				required: true,
			},
		},
	],
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		required: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Product", productSchema);
