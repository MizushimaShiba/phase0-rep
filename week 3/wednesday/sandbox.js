function object(object)
{
  return object.foxes[0].class
}


console.log(object({ foxes: [ { name: 'Dimitri', score: 90, class: 'foxes' } ],
wolves:
 [ { name: 'Alexei', score: 85, class: 'wolves' },
   { name: 'Anastasia', score: 78, class: 'wolves' } ] }));
