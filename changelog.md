### changelog

A running list of changes. While the main site uses cache busting, you may need to clear cache locally to see these.

---

1/5/23

- doubled base movementSpeed (way too slow before)
- window.axis.scenes now has a list of scenes, instead of requiring getDocumentById('yourScene')
- window.axis.scriptFromUrl = (url, callback) to dynamically load scripts
- ax-light elements now have direct access to the three Light via el.light
- ax-gltf-model elements now have direct access to the model via el.model
- In general you can directly access any object modifier via el.directives (this is not a change)