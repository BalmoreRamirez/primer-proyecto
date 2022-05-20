const model = require("../models/user");

/**
 *Obtener DATA de usuarios
 */
const options = {
  page: 1,
  limit: 3,
};
const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};
exports.getData = (req, res) => {
  //find
  model.paginate({}, options, (err, docs) => {
    res.send({
      items: docs,
    });
  });
};

/**
 *Insertar DATA de usuarios
 */
exports.insertData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    if (err) {
      res.send({ error: "Error" }, 422);
    } else {
      res.send({ data: docs });
    }
  });
};

exports.updateSingle = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  model.updateOne(
    {
      _id: parseId(req.params.id),
    },
    body,
    (err, docs) => {
      res.send({
        items: docs,
      });
    }
  );
};
