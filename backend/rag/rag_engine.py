from langchain_community.document_loaders import TextLoader
from langchain_community.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma  # ✅ updated import
from langchain_mistralai import MistralAIEmbeddings
import os

def get_rag_context(query: str) -> str:
    try:
        mistral_api_key = os.getenv("mistral_api_key")

        # Load all markdown files from the knowledge base directory
        loader = DirectoryLoader("backend/kb", glob="**/*.md")
        docs = loader.load()

        # Split into chunks
        splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
        chunks = splitter.split_documents(docs)

        # Use Mistral for embeddings
        embeddings = MistralAIEmbeddings(
            model="mistral-embed",
            mistral_api_key=mistral_api_key
        )

        vectorstore = Chroma.from_documents(chunks, embedding=embeddings)
        retriever = vectorstore.as_retriever()

        # Retrieve relevant context using the updated retriever method
        results = retriever.invoke(query)
        context = "\n\n".join([doc.page_content for doc in results])
        return context

    except Exception as e:
        print("❗ RAG Error:", e)
        return ""

