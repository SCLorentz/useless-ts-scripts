class Result<T, E>
{
    private readonly _tag: 'Ok' | 'Err';
    private readonly _value?: T;
    private readonly _error?: E;

    private constructor(tag: 'Ok' | 'Err', value?: T, error?: E)
    {
        this._tag = tag;
        this._value = value;
        this._error = error;
    }

    static Ok<T>(value: T): Result<T, E> {
        return new Result('Ok', value);
    }

    static Err<T, E>(error: E): Result<T, E> {
        return new Result('Err', error);
    }

    isOk(): this is { _tag: 'Ok'; value: T; } {
        return this._tag === 'Ok';
    }

    isErr(): this is { _tag: 'Err'; error: E; }
    {
        return this._tag === 'Err';
    }

    map<U>(fn: (value: T) => U): Result<U, E>
    {
        if (this.isOk())
        {
            return Ok(fn(this.value!));
        }
        else
        {
            return this as Result<U>; // Propagando o erro
        }
    }
}