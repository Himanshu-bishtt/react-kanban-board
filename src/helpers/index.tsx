export function getInitials(name: string) {
  const words = name.split(" ");
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  let initials = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  }
  return initials;
}

export function priorityMap(priority: number | string) {
  let name;
  switch (priority) {
    case 4:
      name = "Urgent";
      break;
    case 3:
      name = "High";
      break;
    case 2:
      name = "Medium";
      break;
    case 1:
      name = "Low";
      break;
    case 0:
      name = "No Priority";
      break;
  }
  return name;
}
