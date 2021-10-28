#!/usr/bin/env node
import { token } from './lib/token';

token.then(token => {
    console.log('Token       :' + token.token);
    console.log('Timestamp   :' + token.generated);
});
