import test from 'ava'
import link from '.'

test('can get link', t => {
	t.is(typeof link, "string")
})

test('link is to an image', t => {
	t.true(/jpg/.test(link))
})

test.todo('link is of an image that is actually of a sink', 
// Implement advanced image processing tools.
)