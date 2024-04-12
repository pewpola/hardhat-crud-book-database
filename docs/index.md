# Solidity API

## BookDataBase

### Book

```solidity
struct Book {
  string title;
  uint16 year;
}
```

### books

```solidity
mapping(uint32 => struct BookDataBase.Book) books
```

### count

```solidity
uint256 count
```

### constructor

```solidity
constructor() public
```

### addBook

```solidity
function addBook(struct BookDataBase.Book newBook) public
```

### editBook

```solidity
function editBook(uint32 id, struct BookDataBase.Book newBook) public
```

### removeBook

```solidity
function removeBook(uint32 id) public
```

### restricted

```solidity
modifier restricted()
```

## HelloWorld

### message

```solidity
string message
```

### setMessage

```solidity
function setMessage(string newMessage) public
```

