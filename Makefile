All: test

test: functions.js
	node functions.js

clean:
	rm -f *~ \#functions.js# \#testScripts.txt#
