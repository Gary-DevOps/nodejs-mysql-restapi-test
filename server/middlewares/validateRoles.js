export const isAdmin = (req, res, next) => {
  console.log(req.user[0].role)
  if (!req.user) {
    return res.status(500).json({
      msg: "Se quiere verificar el rol sin validar el token primero",
    });
  }
  const { role, name } = req.user[0];
  if (role != "1") {
    return res.status(401).json({
      msg: `${name} no es un administrador`,
    });
  }
  next();
};