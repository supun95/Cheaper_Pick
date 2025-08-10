/**
 * Extracts a product title from a webpage using multiple fallback methods
 * @returns {string|null} The cleaned product title or null if not found
 */
function extractProductTitle() {
    // Method 1: Try H1 tag
    const h1Element = document.querySelector('h1');
    if (h1Element && h1Element.textContent.trim()) {
        return cleanProductTitle(h1Element.textContent.trim());
    }
    
    // Method 2: Try og:title meta tag
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta && ogTitleMeta.getAttribute('content')) {
        return cleanProductTitle(ogTitleMeta.getAttribute('content').trim());
    }
    
    // Method 3: Try meta[name='title']
    const titleMeta = document.querySelector('meta[name="title"]');
    if (titleMeta && titleMeta.getAttribute('content')) {
        return cleanProductTitle(titleMeta.getAttribute('content').trim());
    }
    
    // Method 4: Try document.title
    if (document.title && document.title.trim()) {
        return cleanProductTitle(document.title.trim());
    }
    
    // No title found
    return null;
}

/**
 * Cleans a product title by removing common brand suffixes and extra whitespace
 * @param {string} title - The raw title to clean
 * @returns {string} The cleaned title
 */
function cleanProductTitle(title) {
    if (!title) return '';
    
    // Common brand suffixes to remove (case insensitive)
    const brandSuffixes = [
        /\s*\|\s*buy\s+now\s*$/i,
        /\s*\|\s*free\s+shipping\s*$/i,
        /\s*\|\s*fast\s+shipping\s*$/i,
        /\s*\|\s*next\s+day\s+delivery\s*$/i,
        /\s*\|\s*amazon\s*$/i,
        /\s*\|\s*ebay\s*$/i,
        /\s*\|\s*walmart\s*$/i,
        /\s*\|\s*target\s*$/i,
        /\s*\|\s*shop\s*$/i,
        /\s*\|\s*store\s*$/i,
        /\s*\|\s*online\s*$/i,
        /\s*\|\s*official\s+store\s*$/i,
        /\s*\|\s*official\s+site\s*$/i,
        /\s*-\s*buy\s+now\s*$/i,
        /\s*-\s*free\s+shipping\s*$/i,
        /\s*-\s*fast\s+shipping\s*$/i,
        /\s*-\s*amazon\s*$/i,
        /\s*-\s*ebay\s*$/i,
        /\s*-\s*walmart\s*$/i,
        /\s*-\s*target\s*$/i,
        /\s*-\s*shop\s*$/i,
        /\s*-\s*store\s*$/i,
        /\s*-\s*online\s*$/i,
        /\s*-\s*official\s+store\s*$/i,
        /\s*-\s*official\s+site\s*$/i,
        /\s*•\s*buy\s+now\s*$/i,
        /\s*•\s*free\s+shipping\s*$/i,
        /\s*•\s*fast\s+shipping\s*$/i,
        /\s*•\s*amazon\s*$/i,
        /\s*•\s*ebay\s*$/i,
        /\s*•\s*walmart\s*$/i,
        /\s*•\s*target\s*$/i,
        /\s*•\s*shop\s*$/i,
        /\s*•\s*store\s*$/i,
        /\s*•\s*online\s*$/i,
        /\s*•\s*official\s+store\s*$/i,
        /\s*•\s*official\s+site\s*$/i
    ];
    
    let cleanedTitle = title;
    
    // Remove brand suffixes
    for (const suffix of brandSuffixes) {
        cleanedTitle = cleanedTitle.replace(suffix, '');
    }
    
    // Clean up extra whitespace and normalize
    cleanedTitle = cleanedTitle
        .replace(/\s+/g, ' ')  // Replace multiple spaces with single space
        .trim();               // Remove leading/trailing whitespace
    
    return cleanedTitle;
}

// Example usage:
// const productTitle = extractProductTitle();
// console.log(productTitle);

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { extractProductTitle, cleanProductTitle };
} 