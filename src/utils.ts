export function random_point_in_map(x: number, y: number) {
  const x_pos = get_random_number_in_range(0, x);
  const y_pos = get_random_number_in_range(0, y);

  return [x, y];
}

function get_random_number_in_range(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}