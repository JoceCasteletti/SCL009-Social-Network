import { validateNewUser } from '../src/assets/js/validate.js';
import { validateEmail } from '../src/assets/js/validate.js';
import { validateSignInWithEmailAndPassword } from '../src/assets/js/validate.js'

describe('validateNewUser',()=>{
    it('deberia retornar false si el usuario no ingresa nombre',()=>{
      expect(validateNewUser ('','Perez','juan.perez@gmail.com','123456')).toBe(false);        
    });
    it('deberia retornar true si el usuario ingresa todos los campos',()=>{
      expect(validateNewUser ('Juan','Perez','juan.perez@gmail.com','123456','123456','Chile','Santiago')).toBe(true);
    });
    it('deberia retornar false si la contraseña tiene menos de 6 digitos',()=>{
      expect(validateNewUser ('Juan','Perez','juan.perez@gmail.com','')).toBe(false);
    });
  });

  describe('validateEmail',()=>{
    it('deberia retornar false si el correo no cumple con los parametros',()=>{
      expect(validateEmail ('juan.perez.gmail.com')).toBe(false);        
    });
    it('deberia retornar true si el correo cumple con los parametros',()=>{
      expect(validateEmail ('juan.perez@gmail.com')).toBe(true);        
    });
  });


  describe("validateSignInWithEmailAndPassword",()=>{
    it('deberia retornar true, si el usuario ingresa todos los campos',()=>{
        expect(validateSignInWithEmailAndPassword("juan.perez@gmail.com","123456")).toBe(true);
    });
    it('deberia retornar false, si el usuario no ingresa todos campo',()=>{
        expect(validateSignInWithEmailAndPassword("","1234")).toBe(false);
    });
    it('deberia retornar true si el usuario es realmente un usuario',()=>{
      expect(validateSignInWithEmailAndPassword('user:juan.perez@gmail.com')).toBe(true);        
    });
  });