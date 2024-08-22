const { Stuff } = require("../models/stuff.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createStuff = async (req, res) => {
    try {
        const { first_name, last_name, password, phone_number, login, is_active } = req.body;

        // Parolni hash qilish
        const hashedPassword = await bcrypt.hash(password, 10);

        const newStuff = new Stuff({
            first_name: first_name,
            last_name: last_name,
            password: hashedPassword,
            phone_number: phone_number,
            login: login,
            is_active: is_active,
        });
        await newStuff.save();
        res.status(201).json(newStuff);
    } catch (error) {
        // Xatolik haqida xabarni "validation" xatoligiga o'zgartiring
        res.status(400).json({ message: "Xatolik: Maydon to'ldirish majburiy" });
    }
};

const login = async (req, res) => {
    try {
        const { login, password } = req.body;

        // Login mavjudligini tekshirish
        const foundStuff = await Stuff.findOne({ login });
        if (!foundStuff) {
            return res.status(404).json({ message: "Noto'g'ri login yoki parol" });
        }

        // Parolni tekshirish
        const isPasswordCorrect = await bcrypt.compare(password, foundStuff.password);
        if (!isPasswordCorrect) {
            return res.status(404).json({ message: "Noto'g'ri login yoki parol" });
        }

        // JWT token yaratish
        const token = jwt.sign({ id: foundStuff._id }, "meningmaxfiykalamm");

        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getStuffById = async (req, res) => {
    try {
        const foundStuff = await Stuff.findById(req.params.id);
        if (!foundStuff) {
            return res.status(404).json({ message: "Xodim topilmadi" });
        }
        res.status(200).json(foundStuff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllStuff = async (req, res) => {
    try {
        const allStuff = await Stuff.find();
        res.status(200).json(allStuff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateStuffById = async (req, res) => {
    try {
        const updatedStuff = await Stuff.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedStuff) {
            return res.status(404).json({ message: "Xodim topilmadi" });
        }
        res.status(200).json(updatedStuff);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteStuffById = async (req, res) => {
    try {
        const deletedStuff = await Stuff.findByIdAndDelete(req.params.id);
        if (!deletedStuff) {
            return res.status(404).json({ message: "Xodim topilmadi" });
        }
        res.status(200).json({ message: "Xodim o'chirildi" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createStuff,
    login,
    getStuffById,
    getAllStuff,
    updateStuffById,
    deleteStuffById,
};
