export type Student = {
  name: string
  age: number
}

export let student: Student = {
  name: 'daniel',
  age: 20,
}

student.name = "30"

console.log(student.name)
