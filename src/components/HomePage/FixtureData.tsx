import { createTeam } from "../ToolkitComponent/functions";

const FixtureData = () => {
  const teamNamesAndId = [
    // Group A
    [
      {
        id: 5,
        name: "Team E",
      },
      {
        id: 6,
        name: "Team F",
      },
      {
        id: 7,
        name: "Team G",
      },
      {
        id: 8,
        name: "Team H",
      },
    ],
    // Group B
    [
      {
        id: 9,
        name: "Team I",
      },
      {
        id: 10,
        name: "Team J",
      },
      {
        id: 11,
        name: "Team K",
      },
      {
        id: 12,
        name: "Team L",
      },
    ],
  ];

  const temp = teamNamesAndId.map((items) => {
    return items.map(({ id, name }) => {
      return { id: id, name: name };
    });
  });

  // console.log(temp);

  return null;
};

export default FixtureData;
