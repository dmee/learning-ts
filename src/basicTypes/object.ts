declare function create(o: Object | null): void;

create({ prop: 0 }); // OK
create(null); // OK
create(undefined); // OK


