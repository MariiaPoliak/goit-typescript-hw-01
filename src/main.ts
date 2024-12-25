// Імпорт функцій і типів
import { DayOfWeek, isWeekend } from "./basic/5";
import { fetchData } from "./generic/1";
import { UserRole, RoleDescription } from "./generic/5";
import { createOrUpdateUser } from "./generic/4";

// Функція перевірки
function main() {
  // Basic 5: Перевірка isWeekend
  console.log("Is Saturday a weekend?", isWeekend(DayOfWeek.Saturday)); // Очікується true
  console.log("Is Monday a weekend?", isWeekend(DayOfWeek.Monday)); // Очікується false

  // Generics 1: Перевірка fetchData
  fetchData<{ title: string }>("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => {
      console.log("Fetch data example:", data); // Очікується об'єкт з API
    })
    .catch((error) => console.error(error));

  // Generics 5: Перевірка RoleDescription
  console.log("Role descriptions:", RoleDescription[UserRole.admin]); // Очікується 'Admin User'

  // Generics 4: Перевірка createOrUpdateUser
  createOrUpdateUser({ email: "example@example.com", password: "password123" });
}

// Виклик main
main();
