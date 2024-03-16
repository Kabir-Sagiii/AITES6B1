function getNames() {
  var data = {
    name: "Sid Patel",
    gender: "male",
    id: 101,
  };

  let { gender, name, id } = data;

  console.log(gender);
  console.log(name);

  gender = "female";
  data.gender = "female";

  console.log(gender); //female
  console.log(data.gender); //male
}

// getNames();

function getId() {
  var ids = [[], 102, 103, 104, 105, 106];

  const [x] = ids;

  console.log(x);

  //   console.log(ids[3]);
  //   console.log(ids[3]);
  //   console.log(ids[3]);
}
getId();
