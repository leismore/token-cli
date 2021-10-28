import { assert } from 'chai';
import { token }  from '../src/lib/token';

const PATTERN_TOKEN = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{22}$/;
const PATTERN_TIME  = /^\d+$/;

describe('Leismore Token Syntax Checking', function(){

    it('Validating', function(){
        token.then(token => {
            assert( PATTERN_TOKEN.test(token.token) && PATTERN_TIME.test(String(token.generated)) );
        });
    });

});