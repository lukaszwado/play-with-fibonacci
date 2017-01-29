/**
 * @author Lukasz
 * @date 26/01/2017.
 */
const fib = {
  [Symbol.iterator](){
    let previous = 0
      , current = 1
      ;
    return {
      next: () => {
        [ previous, current ] = [ current, previous + current ];
        return {
          done: current >= this.limit,
          value: current
        };
      }
    };
  },
  limit: 0
};

const fibonacci = new Proxy( fib, {
  get( obj, key ) {
    if ( !~~key ) {
      throw new Error( 'Fibonacci accepts integer keys only.' );
    } else {
      obj.limit = ~~key;
      return obj;
    }
  }
} );

for ( let n of fibonacci[ 100 ] ) {
  console.log( n );
}