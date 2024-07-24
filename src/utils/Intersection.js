// function setSimpleIntersectionObserver(target, root = null, threshold = 0, rootMargin = '0px') {
// 	const simpleIntersectionOptions = {
// 		root,
// 		rootMargin,
// 		threshold
// 	};

// 	let simpleIntersectionObserver = new IntersectionObserver(function (entries) {
// 		entries.forEach(entry => {
// 			const intersectionEvent = new CustomEvent('simple-intersection', {
// 				detail: { isIntersecting: entry.isIntersecting }
// 			});
// 		});
// 	}, simpleIntersectionOptions);

// 	simpleIntersectionObserver.observe(target);
// }

// TODO use the this function in order to refine it, the custom event seems to be not useful
