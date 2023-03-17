const  {User} = require('../models/User');
const nodemailer = require('nodemailer');

const sendVerificationEmail = (email, token) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.NODEMAILER_MAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: process.env.NODEMAILER_MAIL,
      to: email,
      subject: 'Verificación de correo electrónico',
      html: `
        <h1>Verificación de correo electrónico</h1>
        <p>Por favor, haga clic en el siguiente enlace para verificar su dirección de correo electrónico:</p>
        <a href="http://localhost:3000/verify-email/${token}">http://localhost:3000/verify-email/${token}</a>
      `,
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  };

const login=async ( req, res) =>{
    const { userName, password} = req.body;

    try{
        const user = await User.findOne({where: {userName} });

        if(!user){
            return res.status(401).json({message: "Usuario no encontrado"});
        }

        const isPasswordValid = await user.checkPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña invalida' });
    }

    req.session.user = user;
    res.status(200).json({ message: 'Ingreso exitoso', user });
    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error:', error });
    }
}

const logout = (req,res) =>{
    req.session.destroy();
    res.status(200).json({message:'Usted ha salido de su sesión de forma exitosa.'})
}

const register = async (req, res) => {
    const { userName, password, age, address, email } = req.body;
  
    try {
      const user = await User.create({ userName, password, age, address, email });
  
      const token = generateVerificationToken();
      user.verificationToken = token;
      await user.save();
  
      sendVerificationEmail(user.email, token);
  
      req.session.user = user;
      res.status(201).json({ message: 'Registro exitoso', user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ha ocurrido un error al registrarse', error });
    }
  };

module.exports = { login, logout, register };