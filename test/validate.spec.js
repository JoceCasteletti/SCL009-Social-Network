import { validateNewUser } from '../src/assets/js/validate.js';
import { validateEmail } from '../src/assets/js/validate.js';

describe('validateNewUser',()=>{
    it('deberia retornar false si el usuario no ingresa nombre',()=>{
      expect(validateNewUser ('','Perez','juan.perez@gmail.com','123456')).toBe(false);        
    });
    it('deberia retornar true si el usuario ingresa todos los campos',()=>{
      expect(validateNewUser ('Juan','Perez','juan.perez@gmail.com','123456','123456','Chile','Santiago')).toBe(true);
    })
    it('deberia retornar false si la contraseña tiene menos de 6 digitos',()=>{
      expect(validateNewUser ('Juan','Perez','juan.perez@gmail.com','')).toBe(false);
    })

  });

  describe('validateEmail',()=>{
    it('deberia retornar false si el correo no cumple con los parametros',()=>{
      expect(validateEmail ('juan.perez.gmail.com')).toBe(false);        
    });
  });
