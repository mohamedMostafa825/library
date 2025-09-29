"use strict";

const myLibrary = [];

function Book(title, author, year, id) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.year = year;
  this.id = id;
}

function addBookToLibrary(title, author, year) {
  const book = new Book(title, author, year, crypto.randomUUID());
  myLibrary.push(book);
}
