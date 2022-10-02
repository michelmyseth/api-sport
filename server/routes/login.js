module.exports = async (req, res) => {
    const { email, password } = req.body;
    const user = await getUser(username);

    if (user.password !== password) {
        return res.status(403).json({
            error: "invalid login",
        });
    }

    delete user.password;

    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "1h" });

    res.cookie("token", token, {
        httpOnly: true,
    });

    return res.redirect("/welcome");
};
