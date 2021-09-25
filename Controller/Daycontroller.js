const DefaultCapacity = require("../Models/DefaultCapacity");
const ExceptionCapacity = require("../Models/ExceptionCapacity");
const ReserVation = require("../Models/ReserVation");

exports.createDefaultCapacity = async (req, res, next) => {
  try {
    const DefaultCapacityAnswer = await DefaultCapacity.create({
      capicity: req.body.capicity,
      name: req.body.name,
    });
    res.status(201).json({
      status: "successful",
      DefaultCapacityAnswer,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.createException = async (req, res, next) => {
  try {
    const ExceptionCapacityAnswer = await ExceptionCapacity.create({
      name: req.body.name,
      date: req.body.Date,
      sans: req.body.sans,
      WeekDay: req.body.WeekDay,
      capicity: req.body.capicity,
    });
    res.status(201).json({
      status: "successful",
      ExceptionCapacityAnswer,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.createReservation = async (req, res, next) => {
  try {
    const ReservationAnswer = await ReserVation.create({
      name: req.body.name,
      date: req.body.Date,
      sans: req.body.sans,
      WeekDay: req.body.WeekDay,
      Reserve: req.body.Reserve,
    });
    res.status(201).json({
      status: "successful",
      ReservationAnswer,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.Getdata = async (req, res, next) => {
  try {
    const Date = "1-2-2000";
    const findReservation = await ReserVation.find({ date: Date });
    const findException = await ExceptionCapacity.find({ date: Date });
    const findDefaultCapacity = await DefaultCapacity.find();
    const Defaultcapcity = findDefaultCapacity[0].capicity / 4;
    console.log("Defaulcapcity", Defaultcapcity);
    const Array = [];
    const message = "";
    findReservation.map((el) => {
      const sansRservation = el.sans.item;
      const Rserve = el.Reserve;
      findException.map((e) => {
        const sansException = e.sans.item;
        sansRservation.map((element) => {
          sansException.map((elemen) => {
            if (element.StartTime === elemen.StartTime) {
              const capicity = e.capicity - Rserve;
              if (capicity < 0) {
                capicity = Defaultcapcity - Rserve;
              }
              Array.push({ capicity: capicity, sans: { element } });
            } else {
              const capicity = Defaultcapcity - Rserve;
              Array.push({
                capicity: capicity,
                sans: { element },
              });
            }
          });
        });
      });
    });
    res.status(200).json({
      message: "succseful",
      Array,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
