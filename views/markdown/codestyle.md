# Code Style

> All code in any code-base should look like a single person typed it, no matter how many people contributed.

For write the same code style we use JSHint and JSCS linters that facilities you the task to static check yout code and detect unused variable and other type of stuff.

You can found more information about the installation process [here](https://github.com/socialbro/socialbro#setup-sublime-text).

Although linter is prepared based in [Airbnb rules set](https://github.com/airbnb/javascript) exist a large number of cases where your soul as developer should be above of the linter warnings.

Keep in mind when working with code:

- Not all code are linter, and don't try to correct all files. This is because we have code that is more old that the moment where we decide lint the code. If you try to fix all warnings in old files, this generate many conflicts in branches.

- Follow the rules for the new code and try to do commit without warnings.

- Unfortunately not all code have tests. In many cases it is very difficult to test, specially in the backend where we connect external services or process. When you change too much code, specially old code, can be dangerous, and without tests we can't ensure that all is working correctly. Try to make the least possible changes.