---
---
jQuery(function() {
	window.idx = lunr(function () {
		this.field('id');
		this.field('title', { boost: 10 });
		this.field('url');
		this.field('category');
		this.field('categories');
		this.field('excerpt');
	});

	window.data = $.getJSON('{{ "/javascript/search_data.json" | prepend: site.github.url }}');

	window.data.then(function(loaded_data) {
		$.each(loaded_data, function(index, value) {
			window.idx.add($.extend({ "id": index }, value));
		});
	});

	$('#site_search').submit(function(event) {
		event.preventDefault();
		var query = $("#search_box").val();
		var results = window.idx.search(query);
		
		window.data.then(function(loaded_data) {

			var searchResults = [];
			results.forEach(function(result) {
				var data = loaded_data[result.ref];
				searchResults.push(data);
	        });

			sessionStorage.hpsDocumentationSearchQuery = query;
			sessionStorage.hpsDocumentationSearchResults = JSON.stringify(searchResults);

			var searchPage = "{{ "/search" | prepend: site.github.url }}";
			window.location.href = searchPage;
		});
	});
});