(async function () {
  const select = document.getElementById('language');
  if (!select) return console.error('Select element not found');

  // Show immediate feedback while loading
  select.innerHTML = '<option value="">Loading languages…</option>';
  select.disabled = true;

  const JSON_PATH = 'languages.json';
  
  try {
    const response = await fetch(JSON_PATH);
    console.log('Fetch response:', response);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log('Parsed JSON data:', data);
    
    // Clear loading text
    select.innerHTML = '';
    
    // Handle different possible data formats
    if (Array.isArray(data)) {
      // Format 1: Array of objects
      data.forEach(item => {
        const opt = document.createElement('option');
        // Try different property names
        const value = item.value || item.code || item.id || '';
        const text = item.title || item.name || item.label || value;
        opt.value = value;
        opt.textContent = text;
        select.appendChild(opt);
      });
    } else if (typeof data === 'object' && data !== null) {
      // Format 2: Object with key-value pairs
      Object.entries(data).forEach(([key, value]) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = typeof value === 'string' ? value : key;
        select.appendChild(opt);
      });
    } else {
      throw new Error('Unexpected data format');
    }
    
  } catch (err) {
    console.error('Failed to load languages:', err);
    
    // Fallback options
    select.innerHTML = `
      <option value="">All Languages</option>
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="cpp">C++</option>
    `;
  } finally {
    select.disabled = false;
  }
})();