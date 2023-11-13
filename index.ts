type Address = {
  street: string
  number: number
}

type User = {
  Nome?: string
  age: number
  address: Address
}

const user: User = {
  age: 28,
  address:  {
    street: 'Rua A',
    number: 1
  }
} 