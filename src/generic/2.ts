type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "color" | "name">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const obj1 = { name: "Alice", color: "Blue" };
const obj2 = { position: 10, weight: 75 };

const result = compare(obj1, obj2);

console.log(result);
// { name: "Alice", color: "Blue", position: 10, weight: 75 }
