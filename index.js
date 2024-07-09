class Greeter {
  #greeting;
  #name;

  constructor(greeting = "Hello", name = "Anonymous") {
    if (typeof greeting !== "string") {
      throw new Error("Greeting must be a string");
    }

    if (typeof name !== "string") {
      throw new Error("Name must be a string");
    }

    this.#greeting = greeting;
    this.#name = name;
  }

  greet() {
    const greeting = this.#greeting || "Hello";
    const name = this.#name || "Anonymous";

    return `${greeting}, ${name}!`;
  }

  setGreeting(greeting = "Hello") {
    if (typeof greeting !== "string") {
      throw new Error("Greeting must be a string");
    }

    this.#greeting = greeting;
  }

  setName(name = "Anonymous") {
    if (typeof name !== "string") {
      throw new Error("Name must be a string");
    }

    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  static defaultGreeting() {
    return "Hello, World!";
  }
}

// const g = new Greeter();
// console.log(g.greet());

// const greeter = new Greeter("Hello", "Alice");
// console.log(greeter.greet());

// greeter.setName("Bob");
// greeter.setGreeting("Hey");

// console.log(greeter.greet());

// -------------------------------------------------------//

class FormalGreeter extends Greeter {
  #title;

  constructor(name = "Anonymous", title = "Mr./Ms.") {
    if (typeof title !== "string") {
      throw new Error("Title must be a string");
    }

    super('Hello', name);
    this.#title = title;
  }

  greet() {
    const name = this.getName() || "Anonymous";
    const title = this.#title || "Mr./Ms.";

    return `Good day, ${title} ${name}.`;
  }

  setTitle(title = "Mr./Ms.") {
    if (typeof title !== "string") {
      throw new Error("Title must be a string");
    }
    this.#title = title;
  }

  static defaultFormalGreeting() {
    return "Good day, Mr./Ms. World.";
  }
}

// const fg = new FormalGreeter().greet();
// console.log(fg);

// const greeter = new Greeter("Hello", "Alice");
// const fg = new FormalGreeter().greet();
// console.log(fg);



export { Greeter, FormalGreeter };