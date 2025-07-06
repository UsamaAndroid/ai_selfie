// /components/ImageGenerator.tsx
import { useState } from 'react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const formData = new FormData();
    // formData.append("image", imageFile); // Add image if needed
    formData.append("model_name", "stable-diffusion-v1");

    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (data.image_base64) {
        setImageUrl(`data:image/png;base64,${data.image_base64}`);
      } else {
        alert('Error generating image');
      }
    } catch (error) {
      console.error(error);
      alert('Error occurred during image generation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter text for image generation"
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
      {imageUrl && <img src={imageUrl} alt="Generated Image" />}
    </div>
  );
};

export default ImageGenerator;
