key_fortress.xpi: LICENSE README.md content.js icons manifest.json options.html options.js
	zip -r $@ $^

clean:
	rm -f key_fortress.xpi

.PHONY: clean
