// Função para gerar placeholder base64 para imagens
export const generatePlaceholder = (width = 400, height = 300, text = 'Carregando...') => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#f7f7f7"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ccc" font-family="Arial, sans-serif" font-size="14">${text}</text>
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

// Função para otimizar URLs de imagem (se usando um CDN)
export const optimizeImageUrl = (url, options = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options
  
  // Se a URL já contém parâmetros de otimização, retorna como está
  if (url.includes('?') && (url.includes('w=') || url.includes('width='))) {
    return url
  }
  
  // Para URLs do Pexels ou outros CDNs, adiciona parâmetros de otimização
  if (url.includes('pexels.com')) {
    const params = new URLSearchParams()
    if (width) params.append('w', width)
    if (height) params.append('h', height)
    if (quality) params.append('q', quality)
    
    return `${url}${url.includes('?') ? '&' : '?'}${params.toString()}`
  }
  
  return url
}

// Função para precarregar imagens críticas
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

// Função para precarregar múltiplas imagens
export const preloadImages = async (urls) => {
  try {
    const promises = urls.map(url => preloadImage(url))
    await Promise.all(promises)
  } catch (error) {
    console.warn('Erro ao precarregar imagens:', error)
  }
}