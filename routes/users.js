var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    "users": [{
        "id": 123,
        "name": "Eladio Guardiola",
        "phones": {
          "home": "800-123-4567",
          "mobile": "877-123-1234"
        },
        "email": ["jd@example.com",
          "jd@example.com",
        ],
        "dateOfBirth": "1983-01-09T00:00:00.000Z",
        "registered": true
      },
      {
        "id": 456,
        "name": "Nemesio Tornero",
        "phones": {
          "home": "800-123-3498",
          "mobile": "877-432-1278"
        },
        "email": ["pt@example.com",
          "pt@example.com",
        ],
        "dateOfBirth": "1983-01-09T00:00:00.000Z",
        "registered": false
      }
    ]
  });
});

router.get('/:id', (req, res) => {
  if (req.params.id == "123") {
    res.json({
      "id": 123,
      "name": "Eladio Guardiola",
      "phones": {
        "home": "800-123-4567",
        "mobile": "877-123-1234"
      },
      "email": ["jd@example.com",
        "jd@example.com",
      ],
      "dateOfBirth": "1983-01-09T00:00:00.000Z",
      "registered": true
    })
  } else {
    res.status(404).send("¡Lo siento, el item no se ha encontrado!")
  }
});

router.put('/:id', (req, res) => {
  var updated_user = req.body;
  // TODO: actualizar usuario
  res.status(200).send('Usuario' + req.body.name + 'ha sido actualizado satisfactoriamente');
});

router.delete('/:id', (req, res) => {
  // TODO: eliminar usuario

});


module.exports = router;
