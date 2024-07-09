import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Greeter, FormalGreeter } from './index.js';

describe('Greeter', () => {
    it('should return "Hello, Anonymous!" when no parameters are provided', () => {
        const greeter = new Greeter();
        expect(greeter.greet()).to.equal('Hello, Anonymous!');
    });

    it('should return "What\'s up, Dog!" when provided with "What\'s up" and "Dog"', () => {
        const greeter = new Greeter("What's up", "Dog");
        expect(greeter.greet()).to.equal("What's up, Dog!");
    });

    it('should return "Hola, Anonymous!" when provided with "Hola"', () => {
        const greeter = new Greeter("Hola");
        expect(greeter.greet()).to.equal("Hola, Anonymous!");
    });

    it('should return the default static greeting "Hello, World!"', () => {
        expect(Greeter.defaultGreeting()).to.equal('Hello, World!');
    });
});

describe('FormalGreeter', () => {
    it('should return "Good day, Mr./Ms. Anonymous." when no parameters are provided', () => {
        const fg = new FormalGreeter();
        expect(fg.greet()).to.equal('Good day, Mr./Ms. Anonymous.');
    });

    it('should return "Good day, Dr. John." when provided with "John" and "Dr."', () => {
        const fg = new FormalGreeter("John", "Dr.");
        expect(fg.greet()).to.equal('Good day, Dr. John.');
    });

    it('should return the default static formal greeting "Good day, Mr./Ms. World."', () => {
        expect(FormalGreeter.defaultFormalGreeting()).to.equal('Good day, Mr./Ms. World.');
    });
});