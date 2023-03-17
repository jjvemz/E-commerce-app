const requireAuth = (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).json({ message: 'No tiene autorización para acceder a esta ruta.' });
    }
    next();
  };

  module.exports= requireAuth